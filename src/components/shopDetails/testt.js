try {
  // Find the ID for the "Weekly Food Offers" section
  const NewArrivalSection = await ProductSection.find({ product__section: 'New Arrivals' });

  if (!NewArrivalSection) {
      return res.status(404).json({ message: 'New arrival product section not found' });
  }

  // Query products with the found section ID
  const newArrivalProducts = await Product.find({ prdSectionId: NewArrivalSection._id }).populate('prdDetailsId')   
  .populate('prdCategoryId')
  .populate('prdSectionId')
  .sort({ createdAt: -1 });

  return res.status(200).json(newArrivalProducts);
} catch (error) {
  console.error(error);
  return res.status(500).json({ message: 'Server error' });
}