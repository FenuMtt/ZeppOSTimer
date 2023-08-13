export class Node {

}

export class LoopNode extends Node {
    constructor(label, iterations, children) {
        this.label = label
        this.children = children
        this.iterations = iterations
    }
}

export class WorkNode extends Node {
    constructor(label, duration, type, children) {
        this.label = label
        this.duration = duration
        this.type = type
        this.children = children
    }
}