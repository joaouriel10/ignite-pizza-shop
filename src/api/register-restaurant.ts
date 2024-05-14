import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  managerName,
  restaurantName,
  phone,
  email,
}: RegisterRestaurantBody): Promise<void> {
  await api.post('/restaurants', { managerName, restaurantName, phone, email })
}
