from flask import Flask, Response, request
from flask_cors import CORS
import json

def create_app() -> Flask:
    app = Flask(__name__)
    CORS(app)
    
    import qis
    
    @app.route('/', methods=['POST'])
    def index():
        w = float(request.get_json().get('w', None))
        y = [qis.get_werner_state_value(x/100) for x in range(0, int(w*100)+1, 1)]
        return Response(json.dumps({ 'y': y }), status=200, headers={ 'Content-Type': 'application/json' })
    
    return app

if __name__ == '__main__':
    create_app().run(debug=True)