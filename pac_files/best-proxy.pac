function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 64.188.124.97:1080",
        "SOCKS 62.60.131.203:5204",
        "SOCKS 202.152.44.18:8081",
        "SOCKS 193.221.203.121:1080",
        "SOCKS 36.255.98.160:8303",
        "SOCKS 36.255.98.168:6713",
        "SOCKS 62.60.131.253:16343",
        "SOCKS 36.255.98.167:4071",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 62.60.131.253:19101",
        "SOCKS 91.107.154.88:443",
        "SOCKS 36.255.98.179:7880",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 36.255.98.175:11934",
        "SOCKS 188.130.160.209:80",
        "SOCKS 62.60.131.253:4201",
        "SOCKS 45.151.31.193:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}