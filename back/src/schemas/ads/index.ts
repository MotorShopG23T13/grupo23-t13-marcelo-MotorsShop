import * as yup from "yup"
import { SchemaOf } from "yup";
import { IAds, ICreateAds, IPatchAds } from "../../interfaces/ads"

const adSerializerRequest: SchemaOf<ICreateAds> = yup.object().shape({
    cover_image: yup.string().required(),
    fipe_table_price: yup.string().required(),
    color: yup.string().required(),
    mileage: yup.number().required(),
    description: yup.string().required(),
    fuel: yup.string().required(),
    year: yup.string().required(),
    model: yup.string().required(),
    price: yup.string().required(),
    brand: yup.string().required(),
})

const adSerializerResponse: SchemaOf<IAds> = yup.object().shape({
    is_activated: yup.boolean().required(),
    cover_image: yup.string().required(),
    fipe_table_price: yup.string().required(),
    color: yup.string().required(),
    mileage: yup.number().required(),
    description: yup.string().required(),
    fuel: yup.string().required(),
    year: yup.string().required(),
    model: yup.string().required(),
    price: yup.string().required(),
    brand: yup.string().required(),
    id: yup.string().required()
})

const adPatchSerializerResponse: SchemaOf<IPatchAds> = yup.object().shape({
    is_activated: yup.boolean().notRequired(),
    cover_image: yup.string().notRequired(),
    fipe_table_price: yup.string().notRequired(),
    color: yup.string().notRequired(),
    mileage: yup.number().notRequired(),
    description: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    price: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    id: yup.string().notRequired()
})


const adArraySerializer: SchemaOf<IAds[]> = yup.array(adSerializerResponse)



export {adSerializerResponse, adSerializerRequest, adArraySerializer, adPatchSerializerResponse}