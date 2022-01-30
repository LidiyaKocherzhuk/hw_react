import Joi from "joi";

export const carValidator = Joi.object({
        model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇ]{1,20}$')).required().messages({
            'string.empty': "Це поле не має бути пустим!",
            'string.patern.base': "Використовуйте тільки букви min-1 символ, max-20 кількість символів!"
        }),
        price: Joi.number().min(0).max(1000000).messages({
            'number.empty': "Це поле не має бути пустим!",
            'nameber.base': 'Ціна може бути від 1 до 1 000 000!',
            'nameber.min': 'Ціна має бути більще 0!',
            'nameber.max': 'Ціна має бути менше 1 000 000!'
        }),
        year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
            'namber.base': 'Рік має бути від 1900 до теперішнього!'
        })
    }
)