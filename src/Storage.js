


class Storage {

 /**
  * check localstorage data
  * @param {*} key 
  * @returns 
  */

    static has( key){
       return localStorage.getItem(key) ? localStorage.getItem(key) : false; 
    }

    /**
     * Get localstorage data
     * @param {*} key 
     */
      
    static get(key) {

        if(this.has(key)){
           return JSON.parse(this.has(key));
        }else{
            return 'No Data Found';
        }

    }

    /**
     * Set localstorage data
     * @param {*} key 
     * @param {*} data 
     */

    static set( key, data) {

       let  setData = [];
        if(this.has(key)){

            setData = JSON.parse((this.has(key)));
            
        }
        setData.push(data);

        localStorage.setItem(key, JSON.stringify(setData))

    }

}

export default Storage;