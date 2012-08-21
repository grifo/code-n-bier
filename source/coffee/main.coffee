$ = (sel) ->
    [].slice.call(document.querySelectorAll(sel))

$$ = (sel) ->
    document.querySelector(sel)


$('a[rel=external]').forEach (item) ->
    item.addEventListener 'click', (e) ->
        e.preventDefault()
        window.open(e.target.href || e.target.parentNode.href)

sibling = (node, type) ->
    node = node["#{type}Sibling"]
    while node and node.nodeType != 1
        node = node["#{type}Sibling"]
    return node

current = $$('.board .item-current')

## CAUTION: all in reverse order
$$('.nav').addEventListener 'click', (event) ->
    console.log 'go go'
    event.preventDefault()
    direction = event.target.className
    status = (right:'previous', left:'next')[direction]

    item = sibling(current, status)
    return unless item

    # itens
    current.className = "item-#{status}"
    item.className = 'item-current'

    # img
    image = item.getAttribute 'data-image'
    if image
        item.style.backgroundImage = "url(#{image})"
        item.removeAttribute 'data-background-image'

    # url
    window.history.pushState {}, document.title, item.getAttribute 'data-url'

    # nav
    tmp = sibling(item, 'previous')
    if tmp
        $$('.nav .right').outerHTML = '<a href="' + tmp.getAttribute('data-url') + '" class="right">&raquo;</a>' 
    else
        $$('.nav .right').outerHTML = '<span class="right">&raquo;</span>'
    
    tmp = sibling(item, 'next')
    if tmp
        $$('.nav .left').outerHTML = '<a href="' + tmp.getAttribute('data-url') + '" class="left">&laquo;</a>' 
    else
        $$('.nav .left').outerHTML = '<span class="left">&laquo;</span>'

    # current
    current = item