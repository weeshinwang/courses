import { FaPepperHot as icon } from 'react-icons/fa'

export default {
    name: 'topping',
    title: 'Toppings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'Name of the topping'
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'Name of the vegetarian',
            options: {
                layout: 'checkbox'
            }
        },
        {
            name: 'slug',
            title: 'Slug Name',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100
            }
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian',
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian ? '🥦': '🍗'}`
        })
    }
};
