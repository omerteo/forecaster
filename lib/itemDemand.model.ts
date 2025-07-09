import mongoose from 'mongoose';

const ItemDemandSchema = new mongoose.Schema({
  internalId: { type: Number, required: true },
  documentNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  quantity: { type: Number, required: true },
  item: { type: String, required: true },
  itemCategory: { type: String, required: true },
  date: { type: Date, required: true },
  shippingState: { type: String, required: true },
  shippingZip: { type: String, required: true },
  shipVia: { type: String, required: true },
  unit: { type: String, required: true },
  model: { type: String, required: true },
}, {
  collection: 'ItemDemand',
  timestamps: false,
});

export default mongoose.models.ItemDemand || mongoose.model('ItemDemand', ItemDemandSchema);
