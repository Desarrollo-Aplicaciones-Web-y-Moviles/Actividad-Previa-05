const assert = require('assert');
const chai = require('chai');
const chaiDom = require('chai-dom');
const requireFromString = require('require-from-string');
const request = require('supertest');
const app = require('../app');

chai.use(chaiDom);


describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)

        })
    });

    let script = `<script src="scripts/ejercicio.js"></script>`
    
    it(`En views/index.ejs use la etiqueta: ${script}`, function() {
      return request(app)
        .get('/')
        .then((response) => {
          chai.expect(response.text).to.contain(script)
        })
    });
   

});