module.exports = class $Model {
  constructor(name, state) {
      this.name = name;
      this.state = state;
      this.dirty = true;
      this.needRender = true;
  }

  setState(state){
    if (!(state instanceof Object)) {
      throw "the state you set must be a Object!";
    }
    this.state = state;
    this.setDirty(true);
  }

  upsertState(state){
    if (!(state instanceof Object)) {
      throw "the state you set must be a Object!";
    }
    for (let key of Object.keys(state)) {
      this.state[key] = state[key];
    }
    this.setDirty(true);
  }

  getState(){
    return this.state;
  }

  isDirty(){
    return this.dirty;
  }

  setDirty(bool){
    if (!(typeof bool === 'boolean')) {
      throw "the dirty you set must be a boolean!";
    }
    this.dirty = bool;
  }

}
