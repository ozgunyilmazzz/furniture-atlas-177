// Supabase — ortak veritabanı ve gerçek üyelik sistemi.
// Yalnızca PUBLISHABLE (anon/public) key kullanılır; bu, tarayıcıda görünmesi güvenli olan anahtardır.
const SUPABASE_URL = 'https://gycvyyzxflmcktjcqlfe.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pnDagwJEhphm2ANdjlTdOw_MR_F6RUL';
const sb = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : { auth: {
      getSession: async ()=>({data:{session:null}}), onAuthStateChange: ()=>{},
      signInWithPassword: async ()=>({error:{message:'Üyelik sistemi şu an yüklenemedi, sayfayı yenileyin.'}}),
      signUp: async ()=>({error:{message:'Üyelik sistemi şu an yüklenemedi, sayfayı yenileyin.'}}),
      verifyOtp: async ()=>({error:{message:'Üyelik sistemi şu an yüklenemedi, sayfayı yenileyin.'}}),
      resend: async ()=>({}), signOut: async ()=>({}),
    },
    from: ()=>({ select: ()=>({ eq: ()=>Promise.resolve({count:0, data:[], error:{message:'offline'}}) }), upsert: async ()=>({error:{message:'offline'}}) }),
    rpc: async ()=>({data:null, error:{message:'Üyelik sistemi şu an yüklenemedi, sayfayı yenileyin.'}}),
  };
