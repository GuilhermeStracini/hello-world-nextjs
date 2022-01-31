import FaqItems from "../../faqItems"

export default function handler(req, res) {   
    res.status(200).json(FaqItems);
}