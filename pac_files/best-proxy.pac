function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.205:5204",
        "SOCKS 62.60.131.204:14150",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 185.172.3.70:8081",
        "SOCKS 62.60.131.194:13268",
        "SOCKS 36.255.98.182:10030",
        "SOCKS 36.255.98.160:8303",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 36.255.98.168:4481",
        "SOCKS 36.255.98.161:4359",
        "SOCKS 36.255.98.153:16464",
        "SOCKS 62.60.131.204:5280",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 36.255.98.160:12126",
        "SOCKS 36.255.98.168:6713",
        "SOCKS 36.255.98.151:20986",
        "SOCKS 62.60.131.253:5489",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}