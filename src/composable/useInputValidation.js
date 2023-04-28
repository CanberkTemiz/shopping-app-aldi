import {ref} from 'vue'

export const useInputValidation = () => {
    const error = ref()

    const validateInput = (inputValue, availableAmount) => {
        error.value = '';
        if(!inputValue.trim()) {
            error.value = 'Input cannot be empty'
            return
        }

        if(isNaN(inputValue)) {
            error.value = 'Input must a number'
        }

        if(inputValue > availableAmount) {
            error.value = 'Cannot be more then available amount'
        }
    }
    return {
        error,
        validateInput
    }
}