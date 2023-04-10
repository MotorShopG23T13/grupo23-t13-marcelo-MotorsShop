import { AppDataSource } from "../../data-source"
import { Ads } from "../../entities/ads.entities"
import { adArraySerializer } from "../../schemas/ads"


const listAdsService = async () => {

    const adsRepository = AppDataSource.getRepository(Ads)

    const ads = await adsRepository.findBy({
        is_activated: true
    })

    

    const validate = adArraySerializer.validate(ads, {
        stripUnknown:true
    })

    return validate

}


export default listAdsService