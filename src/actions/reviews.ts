"use server";

export async function createReview(formData: FormData) {
  const rawFormData = {
    rating: formData.get("rating"),
    subOrdDub: formData.get("sub-or-dub"),
    title: formData.get("title"),
    text: formData.get("text"),
  };
}
