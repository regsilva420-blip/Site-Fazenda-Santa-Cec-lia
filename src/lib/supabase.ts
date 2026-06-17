export const supabase = {
  storage: {
    from: (bucket: string) => ({
      getPublicUrl: (path: string) => ({
        data: {
          publicUrl: `https://quzsjtcvkdzmhzvosunn.supabase.co/storage/v1/object/public/${bucket}/${path}`
        }
      })
    })
  }
};
