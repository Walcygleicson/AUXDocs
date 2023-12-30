

function span(className, content) {
    content = content ? content : ''

    if (className) {
        className = `class="${className}"`
    } else {
        className = ''
    }


    return `<span ${className}>${content}</span>`;
}

//----------------------------------------------
//JAVASCRIPT

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


function parseType(value) {

    const parser = (v) => {
        if (getType(v) == 'string' && v.includes('</span>')) {
            return v
        } else {

            if (getType(v) == 'string') {
                return '"' + span(getType(v), v) + '"'
            } else if (getType(v) == 'boolean' && v == false) {
                return span(getType(v), 'false')
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

    const(name, value) {
        const keyword = span('keyword', 'const ')
        var varName = span('const', name)

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
        return span('keyword', 'const')
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
    },

    method(fullName, params) {
        fullName = fullName.split('.')

        return span('prop', fullName[0]) + '.' + span('call', fullName[1]) + `(${arr_obj(params)})`
    }
}

//-----------------------------------------------------------
// HTML

export const HTML = {
    tag(name, attrs = {}, content='') {

        let atributes = []
        Object.keys(attrs).forEach((key) => {
            if (attrs[key] == true) {
                atributes.push(span('attr', key))
            } else {
                let attrValue
                if (key == 'class') {
                    attrValue = span('class-name', attrs[key])
                } else if (key == 'id') {
                    attrValue = span('id-name', attrs[key])
                } else {
                    attrValue = span('attr-value', attrs[key])
                }

                atributes.push(span('attr', key + span('equal',`="${attrValue}"`)))
            }
        })

        if (atributes.length > 0) {
            atributes = " " + atributes.join(' ') 
        } else {
            atributes = ''
        }

        const close = content==''? "": '<' + span('', '/' + span('tag-name', name)) + '>'

        let tag = "<" + span('', span('tag-name', name)) + atributes +'> ' + span('tag-content', content + ' ') + close 
        
        return span('tag', tag)
    },

    close(name='') {
        return span('tag', '<' + span('', '/' + span('tag-name', name)) + '>') 
    },

    content(text='') {
        return span('tag-content', text)
    },

    coment(text='') {
        return span('html-coment', '&lt;!-- ' + text + ' -->')
    },

    document(bodyContent='') {
        return `${HTML.tag('!DOCTYPE', { html: true })}
${HTML.tag('html', { lang: 'pt-br' })}
${HTML.tag('body')}
    ${bodyContent}
${HTML.close('body')}
${HTML.close('html')}`
    }
}


