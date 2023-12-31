function doTheReplacementJob(src, id, options){
  return src.replace("__FILE__", id.replace(options && 'dir' in options ? options.dir : "", ""))
      .split("\n")
      .map((val, index)=>{
        return val.replace("__LINE__", index + 1)
      })
      .join("\n")
}

export default function PreprocessDebugInfo(options) {
  const fileRegex = options && 'files' in options ? options.files : /\.(vue)|(ts)$/
  return {
    name: 'PreprocessDebugInfo',
    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: doTheReplacementJob(src, id, options),
          map: null, // provide source map if available
        }
      }
    },
  }
}
