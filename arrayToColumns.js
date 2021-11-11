import React from 'react';
import {Trash} from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import stringToCamelCase from './stringToCamelCase';

const arrayToColumns = (arr, noUnique, action) => {
    const result = arr.map(text => {
        if (text !== 'Delete') {
            return {
                dataField: stringToCamelCase(text),
                text: text
            }
        } else {
            const handleDeleteClick = async (event, cell, row) => {
                event.stopPropagation();
                if (window.confirm(`Are you sure you want to delete ${row.name}?`)) {
                    await action(row.name, row.id);
                }
            };
            const actionsFormatter = (cell, row) => {
                return (<Button variant={'outline-secondary'} className={['button-no-borders', 'p-0'].join(' ')}
                                onClick={(event) => handleDeleteClick(event, text, row)}>
                    <Trash/>
                </Button>);
            };
            return {
                dataField: 'deleteColumn', // because 'delete' is a reserved word in JS
                text: text,
                csvExport: false,
                formatter: actionsFormatter
            }
        }
    });

    if (noUnique) {
        result.concat({
            dataField: 'id',
            text: 'Id',
            headerAttrs: {
                hidden: true
            },
            hidden: true,
            csvExport: false
        });
    }

    return result;
};

export default arrayToColumns;
