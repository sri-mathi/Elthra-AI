from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

nlp = pipeline(
    'question-answering',
    model='bert-large-uncased-whole-word-masking-finetuned-squad',
    tokenizer='bert-large-uncased-whole-word-masking-finetuned-squad'
)

@app.route('/ask', methods=['POST'])
def ask_question():
    question = request.form.get('question')
    context = request.form.get('context', '')

    file = request.files.get('file')
    if file:
        document_text = file.read().decode('utf-8')
        context += '\n' + document_text

    results = nlp({'question': question, 'context': context})

    return jsonify({'answer': results['answer']})

if __name__ == '__main__':
    app.run(debug=True)
