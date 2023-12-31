class Validator{
    constructor(){
        this.Validations = [
            'data-min-length', 
        ]
    }

    validate(form){
        let inputs = form.getElementById('input');

        let inputsArray = [...inputs];

        inputsArray.forEach(function(input) {
            
            for(let i = 0 ; this.Validations.length > i; i++){
                if(input.getAttribute(this.Validations[i]) != null){
                    
                    let method = this.Validations[i].replace('data-', '').replace('-', '');

                    let value = input.getAttribute(this.Validations[i]);

                    this[method](input, value);

                }
            }

        }, this);
    }

    minlength(input, minValue){
        let inputLength = input.value.lenght;

        let errorMessage = `O campo precisa ter pelo menos ${minValue}  caracteres`;


        if(inputLength <minValue){
            this.printMessage(input, errorMessage);
        }

    }

    printMessage(input, msg){

        let template = document.querySelector('.error-validation').cloneNode(true);
        
        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent.appendChild(template);

    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let Validator = new Validator();

submit.addEventListener('click', function(e){

    e.prevenDefault();

    validator.validate(form);
});