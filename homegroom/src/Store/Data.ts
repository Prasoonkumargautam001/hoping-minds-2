export interface INavMenu {
    title:string,
    url:string
}
export interface IBannerText {
    heading:string,
    desc:string
    buttonData:{
        buttonText:string
        buttonUrl:string
    }
}
export const navMenu =[
    {
        title:"Service",
        url:"/"
    },
    {
        title:"About",
        url:"/"
    },

]

export const bannerData ={
    heading:"Customer's Choice HomeGroom",
    desc:"Finding a reliable online service is no more difficult specially when it comes to domestic help. so what are you waiting for click the button below." ,
    buttonData:{
        buttonText:"Book Now",
        buttonUrl:"/"
    },
    images:[
  "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661443439020-e880061ef57b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

}
export const services = [
    {
        id:1,
        role:'Baby Sitter',
        img:"https://plus.unsplash.com/premium_photo-1661443439020-e880061ef57b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:1,
        role:'Baby Sitter',
        img:"https://plus.unsplash.com/premium_photo-1661443439020-e880061ef57b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:1,
        role:'Baby Sitter',
        img:"https://plus.unsplash.com/premium_photo-1661443439020-e880061ef57b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:1,
        role:'Baby Sitter',
        img:"https://plus.unsplash.com/premium_photo-1661443439020-e880061ef57b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

] 