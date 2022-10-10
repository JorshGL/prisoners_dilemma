from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
import qiskit.quantum_info as qi
from qiskit.circuit import Parameter
import numpy as np


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

print(get_werner_state_value(0.49))
    