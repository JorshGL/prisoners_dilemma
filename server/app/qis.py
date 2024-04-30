import numpy as np
import qiskit.quantum_info as qi
from qiskit import (Aer, ClassicalRegister, QuantumCircuit, QuantumRegister,
                    transpile)
from qiskit.circuit import Parameter
from qiskit.extensions import UnitaryGate
from scipy.linalg import expm


def _werner_circuit_fully_quantum() -> QuantumCircuit:
    q = QuantumRegister(5, name='q')
    cr = ClassicalRegister(2, name='c')
    C = QuantumCircuit(q, cr,name='fully_quantum_werner')
    
    theta = Parameter('θ')
   
    C.ry(theta, 0)
    C.cx(0, 2)
    C.h(0)
    C.cx(2, 1)
    C.x(2)
    C.ch(2, 1)
    C.x(2)
    C.ccx(2, 0, 1)
    C.x(2)
    C.ccx(2, 0, 3)
    C.ccx(2, 1, 4)
    C.y(1)
    C.p(-np.pi/2,1)

    return C


def werner_state(w: float):
    theta = 2*np.arcsin(np.sqrt(w))
    qc =  _werner_circuit_fully_quantum().bind_parameters({theta})
    vector = qi.Statevector.from_instruction(qc)
    teostate = qi.partial_trace(vector, [2,3,4])
   # val = display(teostate.draw('latex', prefix='\\rho_{teo} = '))
    return teostate

def get_werner_state_value(w: float) -> float:
    return qi.entanglement_of_formation(werner_state(w))


def payoff(counts):
    total = counts.shots()
    p00 = counts.get('00',0)/total
    p01 = counts.get('01',0)/total
    p10 = counts.get('10',0)/total
    p11 = counts.get('11',0)/total

    valB = 5-(4*p00 + 2*p11 + 5*p10 + 0*p01)
    valA = 5-(4*p00 + 2*p11 + 0*p10 + 5*p01)
   # valA = p00 + 3*p11 + 0*p10 + 5*p01
   # valB = p00 + 3*p11 + 5*p10 + 0*p01
    return valA,valB


def run_circuit(tA,tB,gamma,wpar, shots=2048):
    simulator = Aer.get_backend('aer_simulator')
    theta = 2*np.arcsin(np.sqrt(wpar))
    circ = measurement_t(tA,tB,gamma).bind_parameters({theta})
    circ = transpile(circ, simulator)

    # Run and get counts
    result = simulator.run(circ,shots=shots).result()
    
    counts = result.get_counts(circ)
    #coutns = result.get_counts(pad=True)
    return counts


def measurement_t(tA,tB,gamma):
    gate = J_gate(-gamma) 
    C = game_strategy_t(tA,tB)
    C.append(gate,[0,1])
   # C.measure([0,1],[0,1])
    C.measure([0,1],[0,1])
    return C


def unitary(theta,phi):
    matrix = [[np.exp(1j*phi)*np.cos(theta/2), np.sin(theta/2)],
          [-np.sin(theta/2), np.exp(-1j*phi)*np.cos(theta/2)]]
   # matrix = UnitaryGate(matrix)   
    return matrix


def J_gate(gamma):
    Dmat = np.array(unitary(np.pi,0))
    arg = np.kron(Dmat, Dmat)
    arg = -1j/2*gamma*arg
    return UnitaryGate(expm(arg))


def game_strategy_t(tA,tB):
    def gateA():
        if tA <0:
            return UnitaryGate(unitary(0,-tA*np.pi/2))
        elif tA>=0:
            return UnitaryGate(unitary(tA*np.pi,0))
    def gateB():
        if tB <0:
            return UnitaryGate(unitary(0,-tB*np.pi/2))
        elif tB>=0:
            return UnitaryGate(unitary(tB*np.pi,0))
            
    C = _werner_circuit_fully_quantum()

    C.append(gateA(),[0])
    C.append(gateB(),[1])
    return C


def get_years_to_pay(strategy_pA: int, strategy_pB: int, w: float):
    return payoff(run_circuit(strategy_pA, strategy_pB, np.pi/2, w))