function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 204.199.202.133:999",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 157.180.121.252:18693",
        "SOCKS 185.157.208.159:80",
        "SOCKS 47.237.78.78:1111",
        "SOCKS 165.227.104.238:8118",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 201.182.150.184:999",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 208.87.243.199:7878",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 14.96.241.97:84",
        "SOCKS 43.209.130.76:43249",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 31.43.194.184:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}