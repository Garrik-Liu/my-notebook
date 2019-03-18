new Vue({
    el: '#app',
    data: {
        selectedId: undefined,
        rawMarkdownCode: '',
        notes: [],
        seletedTitle: ''
    },
    computed: {
        htmlCode: function() {
            return marked(this.rawMarkdownCode);
        },
        targetNote: function() {
            for (let [index, note] of this.notes.entries()) {
                if (note.id === this.selectedId) {
                    return {
                        note: note,
                        index: index
                    };
                }
            }
        }
    },
    methods: {
        addNote: function() {
            const time = new Date();
            const note = {
                id: String(time.getTime()),
                title: '新建文档',
                content: '',
                time: time,
            }

            this.notes.push(note);
            localStorage.setItem('notes', JSON.stringify(this.notes))
        },
        changeNote: function(id) {
            this.selectedId = id;
            this.rawMarkdownCode = this.targetNote.note.content;
        },
        deleteNote: function(id) {
            this.selectedId = id;
            this.notes.splice(this.targetNote.index, 1);
        },
        changeTitle: function() {

        }
    },
    watch: {
        rawMarkdownCode: function(newMarkdownCode) {
            this.targetNote.note.content = newMarkdownCode;
            localStorage.setItem('notes', JSON.stringify(this.notes))
        },
        seletedTitle: function() {
            this.targetNote.note.title = this.seletedTitle;
            localStorage.setItem('notes', JSON.stringify(this.notes))
        }
    },
    created: function() {
        this.notes = JSON.parse(localStorage.getItem('notes')) || [];
    }
})