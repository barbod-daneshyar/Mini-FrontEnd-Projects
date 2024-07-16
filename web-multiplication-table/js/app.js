const width = document.querySelector('#width')
const height = document.querySelector('#height')
const form = document.querySelector('form')
const content = document.querySelector('.content')

// multiplication chart
function MakeChart(event) {
    event.preventDefault()

    
    w = Number(width.value)
    h = Number(height.value)
    
    if (w === NaN || h === NaN || w===0 || h === 0) return
    
    width.value = ''
    height.value = ''
    content.innerHTML = ''
    
    
    let first_row = false

    for (let i = 1; i <= h; i++) {
        const row = document.createElement('div')
        content.appendChild(row)
        let first_col = false
        for (let j = 1; j <= w; j++) {
            let res = j * i
            const cell = document.createElement('span')
            const cell_in = document.createTextNode(res)
            cell.appendChild(cell_in)
            row.appendChild(cell)
            if (!first_col) {
                cell.classList.add('title_row_theme')
                first_col = true
            }
            if (!first_row) cell.classList.add('title_row_theme')
        }
        if (!first_row) first_row = true
    }
}



form.addEventListener('submit', MakeChart)