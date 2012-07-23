$ = (sel) ->
    [].slice.call(document.querySelectorAll(sel))

$$ = (sel) ->
    document.querySelector(sel)

$('a[rel=external]').forEach (item) ->
    item.addEventListener 'click', (e) ->
        e.preventDefault()
        window.open(e.target.href || e.target.parentNode.href);