function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.8.114.37:8123",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 46.55.143.145:8080",
        "SOCKS 142.54.237.38:4145",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 124.248.184.144:1080",
        "SOCKS 181.209.82.154:23500",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 159.8.114.37:80",
        "SOCKS 37.120.162.180:10499",
        "SOCKS 38.51.207.184:999",
        "SOCKS 37.120.162.180:44863",
        "SOCKS 218.78.65.202:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}