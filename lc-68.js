/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let i = 0, lineLength = 0, spaceCount = 0
  const res = []
  const line = []
  const space = []
  while (i < words.length) {
    let needNewLine = false
    if (lineLength + spaceCount + words[i].length <= maxWidth) {
      line.push(words[i])
      space.push(' ')
      spaceCount++  
      lineLength += words[i].length
      i++
    } else {
      needNewLine = true
    }
    
    if(needNewLine || i === words.length) {
      // 去掉最后一个没拼接上的空格
      if ((i !== words.length && line.length > 1) || lineLength + spaceCount > maxWidth) {
        space.pop()
        spaceCount--
      }
      
      // 分配空格
      for (let s = 0; s < maxWidth - lineLength - spaceCount; s++) {
        if (i === words.length) {
          if (space.length) {
            space[space.length - 1] += ' '
          } else {
            space.push(' ')
          }
        } else {
          space[s % spaceCount] += ' '
        }
      }
      
      let str = ''
      while (line.length) {
        str += line.shift()
        if (space.length) {
          str += space.shift()  
        }
      }
      
      lineLength = 0
      spaceCount = 0
      res.push(str)
    }
  }

  return res
};