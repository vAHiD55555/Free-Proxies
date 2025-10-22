function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.97.24.122:8222",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 217.77.102.18:3128",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 185.93.89.169:6806",
        "SOCKS 160.25.8.141:11011",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 47.236.86.93:33333",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 137.184.152.66:20898",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 185.93.89.165:4090",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 18.175.52.176:3128",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 93.184.4.37:1080",
        "SOCKS 195.74.86.205:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}