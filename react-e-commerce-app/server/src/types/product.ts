import type { Document, Types } from 'mongoose';

export interface IBadge {
	text: string;
	startDate: Date;
	endDate: Date;
}

export interface IProduct extends Document {
	name: string;
	slug: string;
	price: number;
	discountPrice?: number;
	currency: string;
	stock: number;
	ratingsAverage: number;
	ratingsQuantity: number;
	description: string;
	isActive: boolean;
	images: [string];
	badges: [IBadge];
	category: Types.ObjectId;
	collections: [Types.ObjectId];
	createdAt: Date;
	updatedAt: Date;
}
