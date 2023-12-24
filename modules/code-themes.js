function span(className, content) {
    content = content? content: ''
    return `<span class="${className}">${content}</span>`;
}
//função que verifica o type d eum objeto
function getType(obj) {
    const toString = Object.prototype.toString.call(obj);
    return toString.split(' ')[1].slice(0, -1).toLowerCase();
}

function arr_obj(obj) {
    if (getType(obj) == 'array') {
           
        var arr = []
        obj.forEach((i) => {
            arr.push(parseType(i))
        })

        return arr.join(', ')
        
    } else if (getType(obj) == 'object') {
        var result = ``
        Object.keys(obj).forEach((k, i, arr) => {

            const barn = () => {
                return arr[i + 1] ? `,
            `: ''
            }
            
            result += span('prop', k) + ': ' + parseType(obj[k]) + barn()
        })


        return `{
            ${result}
        }`
        
    }
}

export const JS = {
    var(name, value) {
        const keyword = span('keyword', 'var ')
        var varName = span('prop', name)

        if (getType(value) == 'array') {
            return keyword + varName + ' = [ ' + (function () {
                var arr = []
                value.forEach((i) => {
                    arr.push(parseType(i))
                })

                return arr.join(', ')
            })() + ' ]'
        } else if (getType(value) == 'object') {
            var result = ``
            Object.keys(value).forEach((k, i, arr) => {

                const barn = () => {
                    return arr[i + 1] ? `,
                `: ''
                }
                
                result += span('prop', k) + ': ' + parseType(value[k]) + barn()
            })


            return `${keyword + varName} = {
                ${result}
            }`
            
        }

        if (value) {
            if (name.includes('.')) {
                varName = varName.replace('.', '')
                value = parseType(value)  
                return varName + ' = ' + value

            }

            value = parseType(value) 
            return keyword + varName + ' = ' + value
        }

        if (name.includes('.') && !value) {
            varName = varName.replace('.', '')
            return varName
        }
        return span('keyword', 'var')
    },


    coment(text) {
        return span('coment', ' //' + text)
    },

    console(value) {

        return span('prop', 'console') +'.'+ span('call', 'log') + '( ' + parseType(value) + ' )'
        
    },


    call(fnName, params) {
        if (params) {
            
        } else {
            params = ''
        }


        return span('call ', fnName) + '(' + arr_obj(params) + ')'
    },

    obj(props) {
        return arr_obj(props)
    },

    arr(arr) {
        return '[ '+ arr.map((item) => {
            return parseType(item)
        }).join(', ') + ' ]'
    }
}


function parseType(value) {

    const parser = (v) => {
        if (getType(v) == 'string' && v.includes('</span>')) {
            return v
        } else {

            if (getType(v) == 'string') {
                return '"' + span(getType(v), v) + '"'
            }
            return span(getType(v), v)
        }

    }

    if (getType(value) == 'array') {
        value.forEach((item, i) => {
            value[i] = parser(item)
        })
    }

    

    return parser(value)
}
