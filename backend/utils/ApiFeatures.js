class ApiFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    search() {
        const keyword = this.queryString.name ? {
            name: {
                $regex: this.queryString.name,
                $options: "i",
            }
        } : {}
        this.query = this.query.find({ ...keyword })
        return this;
    }
    filter() {
        const filterString = { ...this.queryString };
        const removeFields = ["name", "page", "limit"];
        removeFields.forEach(field => delete filterString[field]);

             //to change gte to $gte for price and rating
             if (filterString.price) {
                 filterString.price = {
                     $gte: Number(filterString.price.gte) || 0,
                     $lte: Number(filterString.price.lte) || 10000000000000
                 }
             }
             if (filterString.rating) {
                 filterString.rating = {
                     $gte:Number(filterString.rating.gte)|| 0
                 }
             }

        this.query = this.query.find(filterString);
        return this;
    }
    pagination(maxPerPage){
        const currPage=Number(this.queryString.page) || 1
        const skip=maxPerPage*(currPage-1);
        this.query=this.query.limit(maxPerPage).skip(skip);
        return this
    }

}
module.exports = ApiFeatures;