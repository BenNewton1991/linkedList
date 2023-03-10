const node = (value) => {
    return {
        value: value || null,
        nextNode: null,
        updateValue(value){
            this.value = value
        }

    }
}




const linkedList = () => {
    let head = null
    let length = 0

    const appendNode = (value) => {
        const newNode = node(value)
        length ++ 
        if (head == null) {
            head = newNode
        }

        else {
            let pointer = head

            while (pointer.nextNode != null) {
                pointer = pointer.nextNode
            }

            pointer.nextNode = newNode
        }
    }

    const prependNode  = (value) => {
        const newNode = node(value)
        length ++ 
        if (head == null) {
            return (head = newNode)
        }
        newNode.nextNode = head
        head = newNode
        }
    
    const size = () => {
        return length
    }
    
    

    let getHead = () => {
        if (head != null) {
            return head.value
        }
        return null
    }

    let getTail = () => {
        let pointer = head

        if (head == null) {
            return null
        }
        while (pointer.nextNode != null) {
            pointer = pointer.nextNode
        }

        return pointer
    }

    let atIndex = (index) => {
        let pointer = head

        if (head == null) {
            return null
        }

        for (let i = 0; i < index; i ++) {
            pointer = pointer.nextNode
        }

        return pointer
    }

    let getValue = (value) => {
        let pointer = head
        if (head == null) {
            return null
        }

        if (head.value == value) {
            return pointer
        }
        
        while (pointer.nextNode != null && pointer.value != value) {
            pointer = pointer.nextNode

            if (pointer.value == value) {
                return pointer
            }
        }
    }

    let pop = () => {
        let pointer = head
        if (head == null) {
            return                         
        }

        if (head.pointer == null) {
            head = null 
            length = 0
            return
        }

        while (pointer.nextNode != null) {
            pointer = pointer.nextNode
        }

        let pointer2 = head

        for (let i = 0; i < length-2; i ++) {
            pointer2 = pointer2.nextNode

        }

        pointer2.nextNode = null;

        length --

        return pointer
    }

    let contains = (value) => {
        let pointer = head


        if (head == null){
            return false
        }

        let tempIndex = 0

        while (pointer.nextNode != null) {
            if (pointer.value == value) {
                return tempIndex
            }
            tempIndex += 1
            pointer = pointer.nextNode
        }

        return false
    }

    let toString = () => {

        let arr = []

        
        if (head == null){
            return false
        }

        let pointer = head

        for (let i = 0; i < length; i ++) {
            arr.push(pointer.value)
            pointer = pointer.nextNode
        }

        return arr

    }

    let insertAt = (value, index) => {

        if (head == null) {
            return 'please use append or prepend node'
        }

        let pointer = head

        for (let i = 0; i < index-1; i++) {
            pointer = pointer.nextNode
        }


        length ++ 

        let temp = pointer.nextNode
        const newNode = node(value)
        newNode.nextNode = temp
        pointer.nextNode = newNode

    }

    let removeAt = (index) => {
        if (!head) return null;

        let pointer = head

        let toAppend = head

        for (let i = 0; i < index-1; i++) {
            pointer = pointer.nextNode
        }

        for (let i = 0; i < index+1; i++) {
            toAppend = toAppend.nextNode
        }


        pointer.nextNode = toAppend
        length -- 


    }

    return {appendNode, prependNode, getHead, getValue, size, getTail, atIndex, pop, contains, toString, insertAt, removeAt}
}

let lis = linkedList()
lis.appendNode('happy')
lis.appendNode('test')
lis.appendNode('goose')
lis.appendNode('duck')

lis.prependNode('lol')

let testing = lis.getValue('lol')





let last = lis.getTail()



console.log(lis.toString())

lis.insertAt('work?', 3)

lis.removeAt(2)

console.log(lis.toString())







