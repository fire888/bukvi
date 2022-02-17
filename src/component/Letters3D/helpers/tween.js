const lerp = (x1, x2, t) => x1 * (1 - t) + x2 * t

                    
export function createTween ({ fromValue, toValue, duration, action }) {
      let timer = null
      
      return { 
          start: () => new Promise (resolve => {
             const timeStarted = Date.now()
             const animate = () => {
                const phase = Math.min(1, (Date.now() - timeStarted) / duration)
                const value = lerp(fromValue, toValue, phase)
                action(value)
                if (phase === 1) return resolve()
                timer = setTimeout(animate, 15)
             }        
             animate()
          }), 
          stop: () => clearTimeout(timer),
      }
}