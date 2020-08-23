exports.getIndex = (req,res, next)=>{
    res.render('home/home',{
        pageTitle:'Ini halaman home',
        path: '/'
    })
}