function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.219.172.7:1011",
        "SOCKS 89.58.45.94:55781",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 89.58.45.94:13321",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 185.93.89.147:5101",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 222.59.173.105:44077",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 185.93.89.143:6083",
        "SOCKS 154.236.177.105:1976",
        "SOCKS 139.59.225.188:12827",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}