export default class HttpUtil
{   
    constructor(){
        this.headers = {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    }

    setContentType = (contentType) => {
        this.headers['Content-Type'] = contentType;
    }

    addHeader = (headerName,headerValue) =>{
        this.headers[headerName] = headerValue;
    }

    HttpGetAsync = async (url)=>{
        return await this._fetch(url,'Get',null);
    }

    HttpPostAsync = async (url,data) =>{
        return await this._fetch(url,'Post',data);
    }

    HttpPutAsync = async (url,data) => {
        return await this._fetch(url,'Put',data);
    }

    HttpDeleteAsync = async (url,data) => {
        return await this._fetch(url,'Delete',data);
    }

    HttpPatchAsync = async (url,data) => {
        return await this._fetch(url,'Patch',data);
    }

    _fetch = async (url, method, data)=>{
        try {
            let option = {
                method:method,
                headers:this.headers,
            }
            if(data)
            {
                option.body = JSON.stringify(data);
            }
            let response = await fetch(url,option);
            if(this._isFetchSuccess(response.status))
            {
                return this._getContentByResponseType(response);
            }
          } catch(e) {
            console.log("Oops, error", e);
          }
    }

    _getContentByResponseType = (response)=>{
        let contentType = response.headers.get("Content-Type")
        if(contentType == null)
            return null;
        let type = contentType.split(";")[0];
        switch (type){
            case 'text/plain':
                return response.text();
                break;
            case 'application/json':
                return response.json();
                break;
            default:
                return null;
        }
    }

    _isFetchSuccess = (statusCode)=>{
        if(Number.isInteger(statusCode) && statusCode>=200 && statusCode<300){
            return true;
        }
        return false;
    }
}