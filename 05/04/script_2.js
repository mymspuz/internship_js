const view = () => alert(styles)

const styles = ['Джаз', 'Блюз']
view()

styles.push('Рок-н-ролл')
view()

const middle = Math.ceil(styles.length / 2) - 1
styles[middle] = 'Классика'
view()

const first = styles.shift()
alert(first)
view()

styles.unshift('Рэп', 'Регги')
view()