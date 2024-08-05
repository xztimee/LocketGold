// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @qphong ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";var qphong={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T12:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2024-08-14T12:04:18Z",purchase_date:"2024-08-14T12:04:17Z",store:"app_store"},xztime={grace_period_expires_date:null,purchase_date:"2024-08-14T12:04:17Z",product_identifier:"com.qphong.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(xztime.product_identifier=s,obj.subscriber.subscriptions[s]=qphong):obj.subscriber.subscriptions["com.qphong.premium.yearly"]=qphong,obj.subscriber.entitlements[e]=xztime}else obj.subscriber.subscriptions["com.qphong.premium.yearly"]=qphong,obj.subscriber.entitlements.pro=xztime;$done({body:JSON.stringify(obj)});
