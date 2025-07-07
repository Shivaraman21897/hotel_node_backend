// validation
import Joi from '@hapi/joi';


const deleteValidation = Joi.object({
    id: Joi.number().required()
})
