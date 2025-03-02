import { useEffect, useState } from 'react'
import './Gifts.css'
import audienceTarget from '../../../services/audienceTarget'
import AudienceTargetModel from '../../../models/audienceTarget/AudienceTargetModel'
import Gift from '../gift/Gift'
import GiftModel from '../../../models/gift/GiftModel'

export default function Gifts(): JSX.Element {

    const [audienceTypes, setAudienceTypes] = useState<AudienceTargetModel[]>([])
    const [audienceTypeId, setAudienceTypeId] = useState<string>('')
    const [gifts, setGifts] = useState<GiftModel[]>([])

    useEffect(() => {
        (async () => {
            try {
                const allAudienceTypes = await audienceTarget.getAudienceTargets()
                setAudienceTypes(allAudienceTypes)
            } catch (e) {
                console.error('Error fetching audiences:', e)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const giftsByTargetAudience = await audienceTarget.getGiftsFilteredByTargetAudience(audienceTypeId)
                setGifts(giftsByTargetAudience)
            } catch (e) {
                console.error('Error fetching audiences:', e)
            }
        })()
    }, [audienceTypeId])

    return (
        <div className='Gifts'>
            <h1>Gift Finder</h1>
            <div className="selection-container">
                <label htmlFor="audienceSelect">Select Target Audience:</label>
                <select
                    id="audienceSelect"
                    className="audience-select"
                    onChange={(e) => {
                        const selectedId = e.target.value;
                        setAudienceTypeId(selectedId)
                    }}
                    value={audienceTypeId}
                >
                    <option value="all">-- Select Target Audience --</option>
                    {audienceTypes.map(audience => (
                        <option key={audience.id} value={audience.id}>
                            {audience.type}
                        </option>
                    ))}
                </select>
            </div>

            <div className='gifts-grid'>
                {gifts.length > 0 ? (
                    gifts.map((g, index) => <Gift key={index} gift={g} />)
                ) : (
                    <p className="no-gifts-message">
                        {audienceTypeId ? "No gifts found for this audience" : "Please select an audience to view gifts"}
                    </p>
                )}
            </div>
        </div>
    )

}