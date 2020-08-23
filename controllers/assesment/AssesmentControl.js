exports.getIndex = (req,res,next)=>{
    res.render('assesment/assesment',{
        pageTitle:'Ini halaman home',
        path: '/assesment',
    });
}

exports.getAssesmentAdd = (req,res,next)=>{
    res.render('assesment/assesment-add',{
        pageTitle:'Assesment Add',
        path: '/assesment',
    });
}

exports.postAssesmentAdd = (req,res,next)=>{

}