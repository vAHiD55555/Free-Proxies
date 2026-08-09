function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.86.75.243:7301",
        "SOCKS 194.87.10.38:1234",
        "SOCKS 27.124.43.201:1080",
        "SOCKS 72.195.34.41:4145",
        "SOCKS 46.37.123.166:1081",
        "SOCKS 203.189.155.68:1080",
        "SOCKS 110.76.144.112:1080",
        "SOCKS 47.85.9.228:10800",
        "SOCKS 137.184.58.163:9050",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 79.137.196.250:1080",
        "SOCKS 175.27.250.85:44163",
        "SOCKS 109.172.55.227:1082",
        "SOCKS 58.19.233.37:1080",
        "SOCKS 147.45.66.115:1082",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 203.189.150.44:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}