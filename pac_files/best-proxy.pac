function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 177.73.186.12:8080",
        "SOCKS 42.121.144.2:81",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 171.238.88.27:1072",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 157.180.121.252:26573",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 45.61.188.134:44499",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}