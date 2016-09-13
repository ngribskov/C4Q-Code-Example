class LandingController < ApplicationController
  def index
    json_data = make_api_call
    minTempF=[]
    maxTempF=[]
    minTempC=[]
    maxTempC=[]
    dateTimeISO=[]
    icon = []
    json_data['response'][0]['periods'].each do |i|
      minTempF.push(i['minTempF'])
      maxTempF.push(i['maxTempF'])
      minTempC.push(i['minTempC'])
      maxTempC.push(i['maxTempC'])
      dateTimeISO.push(i['dateTimeISO'])
      icon.push(i['icon'])
    end
    @day = []
    @minC=minTempC
    @minF=minTempF
    @maxC=maxTempC
    @maxF=maxTempF
    id = 0
    1.upto(dateTimeISO.length) do |j|
      holder_array = []
      holder_array.push(dateTimeISO.pop)
      holder_array.push(icon.pop)
      holder_array.push(minTempF.pop)
      holder_array.push(minTempC.pop)
      holder_array.push(maxTempF.pop)
      holder_array.push(maxTempC.pop)
      holder_array.push(id)
      @day.push(holder_array)
      id +=1
    end

  end

  private

  def make_api_call
    query = {
      :client_id => "1cAnfOmKCVbq87rbFvpM2",
      :client_secret => "Pnr71CThdZgHtSwDB3Zq72TztGoiNmqVZtThX99h"
    }.to_query
    url = URI.parse("http://api.aerisapi.com/forecasts/11101?" + query)

    req = Net::HTTP::Get.new(url.to_s)
    http = Net::HTTP.new(url.host,url.port)
    response = http.request(req)
    raw_response = response.body
    result = JSON.parse(raw_response)
  end
end
