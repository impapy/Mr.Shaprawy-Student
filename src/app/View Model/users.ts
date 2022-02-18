export interface Users {
    _id?:string,
    name?: string,
    email?: string,
    phone?: string,
    ParentPhone?: string,
    yearstude?:string,
    password?: string,
    imageproph?:string,
    reportVideosTest?: [
        {
            vidoeaId: string,
            degre: string,
            issuccessfull:boolean
        }
    ],
    monthExame?: [
        {
            exampId: string,
            degre: string
            issuccessfull:boolean,
            isgoto:string
        }
    ],
    reportHW?: [
        {
          vidoeaId:string,
          degre:string
        }
      ]
}
