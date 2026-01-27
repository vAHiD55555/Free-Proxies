function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 78.12.230.52:10025",
        "SOCKS 188.132.222.19:8080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 62.60.131.203:4060",
        "SOCKS 62.60.131.179:10608",
        "SOCKS 62.60.131.204:11829",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 62.60.131.178:10065",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 62.60.131.205:4983",
        "SOCKS 36.255.98.168:6956",
        "SOCKS 36.255.98.177:9494",
        "SOCKS 62.60.131.253:4145",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 36.255.98.167:4863",
        "SOCKS 146.103.104.48:54101",
        "SOCKS 36.255.98.181:4798",
        "SOCKS 8.142.3.145:3306",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}