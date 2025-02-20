class projet {
    constructor(id, name, description, category, year, team, arts) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.year = year;
        this.team = team;
        this.arts = arts;
    }

    static create({ id, name, description, category, year, team, arts }) {

        if(!id || !name || !description || !category || !year || !team || !arts) {
            throw new Error('Missing parameters');
        } else {
            return new projet(id, name, description, category, year, team, arts);
        }   
        
    }

}