export interface Data {
   operator: string;
   trackingNumber: string;
   origin: string;
   postingPointCode: null;
   postingCity: null;
   deliveryPointCode: null;
   deliveryCity: null;
   currentStatus: CurrentStatus;
   changes: CurrentStatus[];
}

interface CurrentStatus {
   updatedAt: string;
   status: string;
   trackingOperatorStatuses: TrackingStatuses[];
}

interface TrackingStatuses {
   updatedAt: string;
   status: string;
   description: string;
   place: string | null;
}
